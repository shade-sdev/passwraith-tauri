use crate::AppState;
use entity::password::Model;
use tauri::command;

use crate::model::{to_model, PasswordModel};

#[tauri::command]
pub async fn find_all(app_state: tauri::State<'_, AppState>) -> Result<Vec<PasswordModel>, String> {
    let passwords = app_state.repo.find_all().await;
    Ok(passwords)
}

#[command]
pub async fn find_one(
    app_state: tauri::State<'_, AppState>,
    id: i32,
) -> Result<Option<PasswordModel>, String> {
    let password = app_state.repo.find_one(id).await;
    Ok(password)
}

#[command]
pub async fn save(
    app_state: tauri::State<'_, AppState>,
    model: PasswordModel,
) -> Result<Model, String> {
    let saved_password = app_state.repo.save(to_model(model)).await;
    Ok(saved_password)
}

#[command]
pub async fn update(
    app_state: tauri::State<'_, AppState>,
    id: i32,
    model: PasswordModel,
) -> Result<Model, String> {
    let updated_password = app_state.repo.update(id, model).await;
    Ok(updated_password)
}

#[tauri::command]
pub async fn delete(app_state: tauri::State<'_, AppState>, id: i32) -> Result<(), String> {
    app_state.repo.delete(id).await;
    Ok(())
}
