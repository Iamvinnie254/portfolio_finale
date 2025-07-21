<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RecommendationResource\Pages;
use App\Filament\Resources\RecommendationResource\RelationManagers;
use App\Models\Recommendation;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\FileUpload;

class RecommendationResource extends Resource
{
    protected static ?string $model = Recommendation::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('Full Name')
                    ->maxLength(20),
                TextInput::make('occupation')
                    ->label('Occupation/Specialization')
                    ->maxLength(50),
                TextInput::make('company')
                    ->label('Company')
                    ->maxLength(50),
                TextArea::make('message')
                    ->label('Recommendation Statement')
                    ->maxLength(225),
                TextInput::make('github_link')
                    ->label('GitHub Link')
                    ->url()
                    ->maxLength(255),
                TextInput::make('linkedin_link')
                    ->label('LinkedIn Link')
                    ->url()
                    ->maxLength(255),
                TextInput::make('phone_number')
                    ->label('Phone Number')
                    ->url()
                    ->maxLength(255),
                TextInput::make('email')
                    ->label('Email Address')
                    ->email()
                    ->maxLength(255),
                FileUpload::make('image')
                    ->label('Image/Profile')
                    ->image()
                    ->imageEditor()
                    ->directory('Recommenders_images')
                    ->visibility('public') // Important: save to storage/app/public
                    ->downloadable()
                    ->previewable(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable()->sortable(),
                TextColumn::make('created_at')->dateTime()->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListRecommendations::route('/'),
            'create' => Pages\CreateRecommendation::route('/create'),
            'edit' => Pages\EditRecommendation::route('/{record}/edit'),
        ];
    }
}
