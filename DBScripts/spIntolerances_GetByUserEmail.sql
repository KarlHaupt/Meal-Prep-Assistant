CREATE PROCEDURE spIntolerances_GetByUserEmail
	@email nvarchar(120)
AS
BEGIN
	SET NOCOUNT ON;

    SELECT intolerance_type 
	FROM dbo.user_details ud
	LEFT JOIN (	SELECT user_id, intolerance_type
				FROM dbo.user_intolerances up
				INNER JOIN dbo.lookup_intolerances li
				ON up.intolerance_id = li.intolerance_id) i
	ON ud.user_id = i.user_id
	WHERE email = @email
END
GO