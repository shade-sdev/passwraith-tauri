use sea_orm::{ActiveModelTrait, Database, DbErr, Set};
use entity::password;

const DATABASE_URL: &str = "sqlite://passwraith.sqlite?mode=rwc";

#[tokio::main]
async fn main() -> Result<(), DbErr>{
    let db = Database::connect(DATABASE_URL).await.expect("Failed to connect to the database");
    let post = password::ActiveModel {
       username: Set(String::from("Shade")),
        password: Set(String::from("Shade")),
        website: Set(String::from("ShadeFlix")),
        website_url: Set(Option::from(String::from("http://shadeflix.ga"))),
        website_icon_url: Set(Option::from(String::from("http://shadeflix.ga/favicon.ico"))),
        r#type: Set(password::PasswordType::Card.into()),
        ..Default::default()
    };

    let post: password::Model = post.insert(&db).await?;

    println!("Post created with ID: {}, TITLE: {}", post.username, post.password);

    Ok(())
}