CREATE PROCEDURE dbo.spIntolerances_GetAllIntolerances
AS
BEGIN
	SET NOCOUNT ON;

    SELECT intolerance_type
	FROM lookup_intolerances
END
GO
