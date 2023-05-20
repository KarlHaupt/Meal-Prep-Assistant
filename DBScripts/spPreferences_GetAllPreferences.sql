CREATE PROCEDURE dbo.spPreferences_GetAllPreferences
AS
BEGIN
	SET NOCOUNT ON;

    SELECT preference_type
	FROM lookup_preferences
END
GO