use serde::{Deserialize, Serialize};
use serde_with_macros::skip_serializing_none;
use ts_rs::TS;

use entity::password::PasswordType;

#[skip_serializing_none]
#[derive(Deserialize, Serialize, TS, Debug)]
#[ts(export, export_to = "../src/bindings/")]
pub struct PasswordModel {
    pub id: i32,
    pub username: String,
    pub password: String,
    pub website: String,
    pub website_url: Option<String>,
    pub website_icon_url: Option<String>,
    pub password_type: PasswordType,
}