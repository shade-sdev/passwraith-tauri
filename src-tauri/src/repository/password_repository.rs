use sea_orm::{
    ActiveModelTrait, Database as MainDatabase, DatabaseConnection as MainDatabaseConnection,
};
use sea_orm::{EntityTrait, Set};

use entity::password::{ActiveModel, Model};
use entity::prelude::Password;
use migration::sea_orm::Database;
use migration::{Migrator, MigratorTrait};

use crate::model::{to_password_model, PasswordModel};

const DATABASE_URL: &str = "sqlite://passwraith.sqlite?mode=rwc";

pub struct PasswordRepository {
    connection: MainDatabaseConnection,
}

impl PasswordRepository {
    pub async fn new() -> Self {
        let connection = MainDatabase::connect(DATABASE_URL)
            .await
            .expect("Failed to connect to db");
        PasswordRepository { connection }
    }

    pub async fn find_one(&self, id: i32) -> Option<PasswordModel> {
        let result = Password::find_by_id(id).one(&self.connection).await;

        match result {
            Ok(Some(model)) => Some(to_password_model(model)),
            Ok(None) => None,
            Err(_) => None,
        }
    }

    pub async fn find_all(&self) -> Vec<PasswordModel> {
        Password::find()
            .all(&self.connection)
            .await
            .expect("Failed to fetch all")
            .into_iter()
            .map(to_password_model)
            .collect()
    }

    pub async fn save(&self, model: ActiveModel) -> Model {
        model
            .insert(&self.connection)
            .await
            .expect("Failed to save")
    }

    pub async fn update(&self, id: i32, model: PasswordModel) -> Model {
        let option = Password::find_by_id(id)
            .one(&self.connection)
            .await
            .expect("Not found");

        let mut password: ActiveModel = option.unwrap().into();
        password.username = Set(model.username.to_owned());
        password.password = Set(model.password.to_owned());
        password.website = Set(model.website.to_owned());
        password.website_url = Set(model.website_url.to_owned());
        password.website_icon_url = Set(model.website_icon_url.to_owned());
        password.r#type = Set(model.password_type.to_owned());

        password
            .update(&self.connection)
            .await
            .expect("Failed to update")
    }

    pub async fn delete(&self, id: i32) {
        Password::delete_by_id(id)
            .exec(&self.connection)
            .await
            .expect("Not found");
    }
}

pub async fn init_migrations() {
    let db = Database::connect(DATABASE_URL)
        .await
        .expect("Failed to setup the database");

    Migrator::up(&db, None)
        .await
        .expect("Failed to run migrations for tests");
}
