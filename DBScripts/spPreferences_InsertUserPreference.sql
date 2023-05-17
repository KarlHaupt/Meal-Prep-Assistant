
CREATE PROCEDURE spPreferences_InsertUserPreference
	@user_preference varchar(50),
	@user_email nvarchar(100)
AS
BEGIN
	SET NOCOUNT ON;

    INSERT INTO dbo.user_preferences (user_id, preference_id)
	VALUES ((	SELECT user_id
				FROM dbo.user_details
				WHERE email = @user_email),
				(SELECT preference_id
				FROM dbo.lookup_preferences
				WHERE preference_type = @user_preference));
END
GO
