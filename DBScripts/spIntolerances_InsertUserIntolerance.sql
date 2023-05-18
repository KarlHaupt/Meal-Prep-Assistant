CREATE PROCEDURE spIntolerances_InsertUserIntolerance
	@user_intolerance varchar(50),
	@user_email nvarchar(100)
AS
BEGIN
	SET NOCOUNT ON;

    INSERT INTO dbo.user_intolerances(user_id, intolerance_id)
	VALUES ((	SELECT user_id
				FROM dbo.user_details
				WHERE email = @user_email),
				(SELECT intolerance_id
				FROM dbo.lookup_intolerances
				WHERE intolerance_type = @user_intolerance));
END
GO