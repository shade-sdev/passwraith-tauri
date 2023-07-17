use tauri::command;

use crate::model::{to_model, PasswordModel};
use crate::repository::PasswordRepository;

#[command]
pub async fn find_all() -> Vec<PasswordModel> {
    PasswordRepository::new().await.find_all().await
}

#[command]
pub async fn find_one(id: i32) -> Option<PasswordModel> {
    PasswordRepository::new().await.find_one(id).await
}

#[command]
pub async fn save(model: PasswordModel) {
    PasswordRepository::new().await.save(to_model(model)).await;
}

#[command]
pub async fn update(id: i32, model: PasswordModel) {
    PasswordRepository::new().await.update(id, model).await;
}

#[command]
pub async fn delete(id: i32) {
    PasswordRepository::new().await.delete(id).await;
}
