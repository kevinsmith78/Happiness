-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/mOfp9u
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "State_region" (
    "Region" int   NOT NULL,
    "State" varchar(100)   NOT NULL
);

CREATE TABLE "State_LaborForce" (
    "2005" int   NOT NULL,
    "2006" int   NOT NULL,
    "2007" int   NOT NULL,
    "2008" int   NOT NULL,
    "2009" int   NOT NULL,
    "2010" int   NOT NULL,
    "2011" int   NOT NULL,
    "2012" int   NOT NULL,
    "2013" int   NOT NULL,
    "2014" int   NOT NULL,
    "2015" int   NOT NULL,
    "2016" int   NOT NULL,
    "2017" int   NOT NULL,
    "2018" int   NOT NULL,
    "2019" int   NOT NULL,
    "State" varchar(100)   NOT NULL
);

CREATE TABLE "State_LaborForce_BA" (
    "2005" int   NOT NULL,
    "2006" int   NOT NULL,
    "2007" int   NOT NULL,
    "2008" int   NOT NULL,
    "2009" int   NOT NULL,
    "2010" int   NOT NULL,
    "2011" int   NOT NULL,
    "2012" int   NOT NULL,
    "2013" int   NOT NULL,
    "2014" int   NOT NULL,
    "2015" int   NOT NULL,
    "2016" int   NOT NULL,
    "2017" int   NOT NULL,
    "2018" int   NOT NULL,
    "2019" int   NOT NULL,
    "State" varchar(100)   NOT NULL
);

CREATE TABLE "Post_Secondary_25-44" (
    "2005" int   NOT NULL,
    "2006" int   NOT NULL,
    "2007" int   NOT NULL,
    "2008" int   NOT NULL,
    "2009" int   NOT NULL,
    "2010" int   NOT NULL,
    "2011" int   NOT NULL,
    "2012" int   NOT NULL,
    "2013" int   NOT NULL,
    "2014" int   NOT NULL,
    "2015" int   NOT NULL,
    "2016" int   NOT NULL,
    "2017" int   NOT NULL,
    "2018" int   NOT NULL,
    "2019" int   NOT NULL,
    "State" varchar(100)   NOT NULL
);

CREATE TABLE "Individuals_25-44" (
    "2005" int   NOT NULL,
    "2006" int   NOT NULL,
    "2007" int   NOT NULL,
    "2008" int   NOT NULL,
    "2009" int   NOT NULL,
    "2010" int   NOT NULL,
    "2011" int   NOT NULL,
    "2012" int   NOT NULL,
    "2013" int   NOT NULL,
    "2014" int   NOT NULL,
    "2015" int   NOT NULL,
    "2016" int   NOT NULL,
    "2017" int   NOT NULL,
    "2018" int   NOT NULL,
    "2019" int   NOT NULL,
    "State" varchar(100)   NOT NULL
);

CREATE TABLE "Major_type" (
    "Major" varchar(50)   NOT NULL,
    "Unemployed" int   NOT NULL,
    "Underemployed" int   NOT NULL,
    "Median_Wage_Early" int   NOT NULL,
    "Median_wage" int   NOT NULL,
    "Share_with_Graduate_Degree" int   NOT NULL
);

CREATE TABLE "National_ranking" (
    "Name" varchar(100)   NOT NULL,
    "Rank" int   NOT NULL,
    "Undergrad_enrollment" int   NOT NULL
);

CREATE TABLE "Uni_lat_long" (
    "Name" varchar(100)   NOT NULL,
    "Lat" int   NOT NULL,
    "Lon" int   NOT NULL
);



