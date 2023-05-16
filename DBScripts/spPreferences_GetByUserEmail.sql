
CREATE PROCEDURE spPreferences_GetByUserEmail
	@email nvarchar(120),
	@preference_type varchar(50) output
AS
BEGIN
	SET NOCOUNT ON;

    SELECT preference_type 
	FROM dbo.user_details ud
	LEFT JOIN (	SELECT user_id, preference_type
				FROM dbo.user_preferences up
				INNER JOIN dbo.lookup_preferences lp
				ON up.preference_id = lp.preference_id) p
	ON ud.user_id = p.user_id
	WHERE email = @email
END
GO
