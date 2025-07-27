<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TrusteeResource\Pages;
use App\Filament\Resources\TrusteeResource\RelationManagers;
use App\Models\Trustee;
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

class TrusteeResource extends Resource
{
    protected static ?string $model = Trustee::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
            TextInput::make('name')
                ->label('Company/Client Name')
                ->maxLength(255),
            FileUpload::make('logo')
                ->label('Logo/Image')
                ->image()
                ->imageEditor()
                ->directory('Trustee_logos')
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
            'index' => Pages\ListTrustees::route('/'),
            'create' => Pages\CreateTrustee::route('/create'),
            'edit' => Pages\EditTrustee::route('/{record}/edit'),
        ];
    }
}
