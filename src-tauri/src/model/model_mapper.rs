use sea_orm::Set;

use entity::password::{ActiveModel, Model};

use crate::model::PasswordModel;

pub fn to_password_model(entity: Model) -> PasswordModel {
    PasswordModel {
        id: entity.id,
        username: entity.username,
        password: entity.password,
        website: entity.website,
        website_url: entity.website_url,
        website_icon_url: entity.website_icon_url,
        password_type: entity.r#type,
    }
}

pub fn to_model(model: PasswordModel) -> ActiveModel {
    ActiveModel {
        username: Set(model.username),
        password: Set(model.password),
        website: Set(model.website),
        website_url: Set(model.website_url),
        website_icon_url: Set(model.website_icon_url),
        r#type: Set(model.password_type),
        ..Default::default()
    }
}
