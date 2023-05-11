USE MealPlanDB;
GO

INSERT INTO [dbo].[lookup_preferences] (preference_type) VALUES 
('Gluten Free'),
('Ketogenic'),
('Vegetarian'),
('Vegan'),
('Pescetarian'),
('Paleo'),
('Primal'),
('Low FODMAP'),
('Whole30');
GO

INSERT INTO [dbo].[lookup_intolerances] (intolerance_type) VALUES 
('Dairy'),
('Peanut'),
('Soy'),
('Egg'),
('Seafood'),
('Sulfite'),
('Gluten'),
('Sesame'),
('Tree Nut'),
('Grain'),
('Shellfish'),
('Wheat');
GO
