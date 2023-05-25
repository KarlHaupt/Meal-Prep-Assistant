USE master;
GO

DROP DATABASE IF EXISTS MealPlanDB;
GO

CREATE DATABASE MealPlanDB;
GO

USE MealPlanDB;
GO

CREATE TABLE user_details (
	[user_id] [INT] NOT NULL PRIMARY KEY IDENTITY(1,1),
	[username] [varchar](120) NULL,
	[email] [nvarchar](120) NOT NULL UNIQUE,
	[password] [varchar](120) NOT NULL,
);
GO

CREATE TABLE user_preferences (
	[user_id] [INT] NOT NULL,
	[preference_id] [INT] NOT NULL,
);
GO

CREATE TABLE lookup_preferences (
	[preference_id] [INT] NOT NULL PRIMARY KEY IDENTITY(1,1),
	[preference_type] [varchar](100) NOT NULL,
);
GO

CREATE TABLE user_intolerances (
	[user_id] [INT] NOT NULL,
	[intolerance_id] [INT] NOT NULL,
);
GO

CREATE TABLE lookup_intolerances (
	[intolerance_id] [INT] NOT NULL PRIMARY KEY IDENTITY(1,1),
	[intolerance_type] [varchar](100) NOT NULL,
);
GO