use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Replace the sample below with your own migration script
        manager
            .create_table(
                Table::create()
                    .table(Password::Table)
                    .if_not_exists()
                    .col(
                        ColumnDef::new(Password::Id)
                            .integer()
                            .not_null()
                            .auto_increment()
                            .primary_key(),
                    )
                    .col(ColumnDef::new(Password::Username).string().not_null())
                    .col(ColumnDef::new(Password::Password).string().not_null())
                    .col(ColumnDef::new(Password::Website).string().not_null())
                    .col(ColumnDef::new(Password::WebsiteUrl).string())
                    .col(ColumnDef::new(Password::WebsiteIconUrl).string())
                    .col(ColumnDef::new(Password::Type).string().not_null())
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Replace the sample below with your own migration scripts

        manager
            .drop_table(Table::drop().table(Password::Table).to_owned())
            .await
    }
}

/// Learn more at https://docs.rs/sea-query#iden
#[derive(Iden)]
enum Password {
    Table,
    Id,
    Username,
    Password,
    Website,
    WebsiteUrl,
    WebsiteIconUrl,
    Type
}
