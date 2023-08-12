#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use crate::repository::PasswordRepository;

mod command;
mod model;
pub(crate) mod repository;

pub struct AppState {
    pub(crate) repo: PasswordRepository,
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tokio::main]
async fn main() {
    repository::init_migrations().await;

    let app_state = AppState {
        repo: PasswordRepository::new().await,
    };

    tauri::Builder::default()
        .manage(app_state)
        .invoke_handler(tauri::generate_handler![
            greet,
            command::find_all,
            command::find_one,
            command::save,
            command::update,
            command::delete
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
