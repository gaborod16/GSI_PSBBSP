

CREATE SEQUENCE "gsi_database"."information_schema"."account_account_id_seq";

CREATE TABLE "gsi_database"."information_schema"."account" (
                "account_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."account_account_id_seq"'),
                "account_username" VARCHAR(255),
                "account_password" VARCHAR(65),
                CONSTRAINT "account_id" PRIMARY KEY ("account_id")
);
COMMENT ON COLUMN "gsi_database"."information_schema"."account"."account_password" IS 'SHA-256 creates 65 character strings';


ALTER SEQUENCE "gsi_database"."information_schema"."account_account_id_seq" OWNED BY "gsi_database"."information_schema"."account"."account_id";

CREATE SEQUENCE "gsi_database"."information_schema"."comment_comment_id_seq";

CREATE TABLE "gsi_database"."information_schema"."comment" (
                "comment_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."comment_comment_id_seq"'),
                "comment_author" VARCHAR(255),
                "comment_datetime" TIMESTAMP,
                "comment_description" VARCHAR(500),
                "subsystem_id" INTEGER NOT NULL,
                CONSTRAINT "comment_id" PRIMARY KEY ("comment_id")
);


ALTER SEQUENCE "gsi_database"."information_schema"."comment_comment_id_seq" OWNED BY "gsi_database"."information_schema"."comment"."comment_id";

CREATE SEQUENCE "gsi_database"."information_schema"."dataclass_dataclass_id_seq";

CREATE TABLE "gsi_database"."information_schema"."dataclass" (
                "dataclass_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."dataclass_dataclass_id_seq"'),
                "dataclass_name" VARCHAR(255),
                "dataclass_description" VARCHAR(500),
                "project_id" INTEGER NOT NULL,
                CONSTRAINT "dataclass_id" PRIMARY KEY ("dataclass_id")
);


ALTER SEQUENCE "gsi_database"."information_schema"."dataclass_dataclass_id_seq" OWNED BY "gsi_database"."information_schema"."dataclass"."dataclass_id";

CREATE SEQUENCE "gsi_database"."information_schema"."organization_organization_id_seq";

CREATE TABLE "gsi_database"."information_schema"."organization" (
                "organization_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."organization_organization_id_seq"'),
                "organization_name" VARCHAR(255),
                CONSTRAINT "organization_id" PRIMARY KEY ("organization_id")
);


ALTER SEQUENCE "gsi_database"."information_schema"."organization_organization_id_seq" OWNED BY "gsi_database"."information_schema"."organization"."organization_id";

CREATE SEQUENCE "gsi_database"."information_schema"."organization_unit_organization_unit_id_seq";

CREATE TABLE "gsi_database"."information_schema"."organization_unit" (
                "organization_unit_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."organization_unit_organization_unit_id_seq"'),
                "organization_unit_name" VARCHAR(255),
                "organization_id" INTEGER NOT NULL,
                CONSTRAINT "organization_unit_id" PRIMARY KEY ("organization_unit_id")
);


ALTER SEQUENCE "gsi_database"."information_schema"."organization_unit_organization_unit_id_seq" OWNED BY "gsi_database"."information_schema"."organization_unit"."organization_unit_id";

CREATE SEQUENCE "gsi_database"."information_schema"."process_process_id_seq";

CREATE TABLE "gsi_database"."information_schema"."process" (
                "process_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."process_process_id_seq"'),
                "process_name" VARCHAR(255),
                "process_description" VARCHAR(500),
                "project_id" INTEGER NOT NULL,
                CONSTRAINT "process_id" PRIMARY KEY ("process_id")
);


ALTER SEQUENCE "gsi_database"."information_schema"."process_process_id_seq" OWNED BY "gsi_database"."information_schema"."process"."process_id";

CREATE TABLE "gsi_database"."information_schema"."process_dataclass" (
                "process_id" INTEGER NOT NULL,
                "dataclass_id" INTEGER NOT NULL,
                "process_dataclass_type" VARCHAR(30),
                "subsystem_id" INTEGER NOT NULL,
                CONSTRAINT "process_dataclass_id" PRIMARY KEY ("process_id", "dataclass_id")
);


CREATE SEQUENCE "gsi_database"."information_schema"."project_project_id_seq";

CREATE TABLE "gsi_database"."information_schema"."project" (
                "project_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."project_project_id_seq"'),
                "project_name" VARCHAR(255),
                "organization_id" INTEGER NOT NULL,
                "account_id_team_leader" INTEGER NOT NULL,
                "account_id_secretary" INTEGER NOT NULL,
                CONSTRAINT "project_id" PRIMARY KEY ("project_id")
);


ALTER SEQUENCE "gsi_database"."information_schema"."project_project_id_seq" OWNED BY "gsi_database"."information_schema"."project"."project_id";

CREATE TABLE "gsi_database"."information_schema"."project_user" (
                "project_id" INTEGER NOT NULL,
                "account_id" INTEGER NOT NULL,
                "project_user_role" VARCHAR(30),
                CONSTRAINT "project_user_id" PRIMARY KEY ("project_id", "account_id")
);


CREATE TABLE "gsi_database"."information_schema"."ss_dataclass" (
                "support_system_id" INTEGER NOT NULL,
                "dataclass_id" INTEGER NOT NULL,
                CONSTRAINT "ss_dataclass_id" PRIMARY KEY ("support_system_id", "dataclass_id")
);


CREATE TABLE "gsi_database"."information_schema"."ss_organization_unit" (
                "support_system_id" INTEGER NOT NULL,
                "organization_unit_id" INTEGER NOT NULL,
                "ss_organization_unit_support_type" VARCHAR(30),
                CONSTRAINT "ss_organization_unit_id" PRIMARY KEY ("support_system_id", "organization_unit_id")
);


CREATE TABLE "gsi_database"."information_schema"."ss_process" (
                "support_system_id" INTEGER NOT NULL,
                "process_id" INTEGER NOT NULL,
                "ss_process_support_type" VARCHAR(30),
                CONSTRAINT "ss_process_id" PRIMARY KEY ("support_system_id", "process_id")
);


CREATE SEQUENCE "gsi_database"."information_schema"."subsystem_subsystem_id_seq";

CREATE TABLE "gsi_database"."information_schema"."subsystem" (
                "subsystem_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."subsystem_subsystem_id_seq"'),
                "subsystem_name" VARCHAR(255),
                "subsystem_description" VARCHAR(500),
                "subsystem_score_potencial_benefits" INTEGER,
                "subsystem_score_impact" INTEGER,
                "subsystem_score_prob_success" INTEGER,
                "subsystem_score_demand" INTEGER,
                "subsystem_score_cost" INTEGER,
                "subsystem_score_dev_time" INTEGER,
                "subsystem_score_total" INTEGER,
                CONSTRAINT "subsystem_id" PRIMARY KEY ("subsystem_id")
);


ALTER SEQUENCE "gsi_database"."information_schema"."subsystem_subsystem_id_seq" OWNED BY "gsi_database"."information_schema"."subsystem"."subsystem_id";

CREATE TABLE "gsi_database"."information_schema"."subsystem_relationship" (
                "subsystem_id_sends" INTEGER NOT NULL,
                "subsystem_id_receives" INTEGER NOT NULL,
                CONSTRAINT "subsystem_relationship_id" PRIMARY KEY ("subsystem_id_sends", "subsystem_id_receives")
);


CREATE SEQUENCE "gsi_database"."information_schema"."support_system_support_system_id_seq";

CREATE TABLE "gsi_database"."information_schema"."support_system" (
                "support_system_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."information_schema"."support_system_support_system_id_seq"'),
                "support_system_name" VARCHAR(255),
                "organization_id" INTEGER NOT NULL,
                CONSTRAINT "support_system_id" PRIMARY KEY ("support_system_id")
);


ALTER SEQUENCE "gsi_database"."information_schema"."support_system_support_system_id_seq" OWNED BY "gsi_database"."information_schema"."support_system"."support_system_id";

ALTER TABLE "gsi_database"."information_schema"."project" ADD CONSTRAINT "account_project_fk1"
FOREIGN KEY ("account_id_secretary")
REFERENCES "gsi_database"."information_schema"."account" ("account_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."project" ADD CONSTRAINT "account_project_fk"
FOREIGN KEY ("account_id_team_leader")
REFERENCES "gsi_database"."information_schema"."account" ("account_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."project_user" ADD CONSTRAINT "user_project_user_fk"
FOREIGN KEY ("account_id")
REFERENCES "gsi_database"."information_schema"."account" ("account_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."process_dataclass" ADD CONSTRAINT "dataclass_process_dataclass_fk"
FOREIGN KEY ("dataclass_id")
REFERENCES "gsi_database"."information_schema"."dataclass" ("dataclass_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."ss_dataclass" ADD CONSTRAINT "dataclass_ss_dataclass_fk"
FOREIGN KEY ("dataclass_id")
REFERENCES "gsi_database"."information_schema"."dataclass" ("dataclass_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."organization_unit" ADD CONSTRAINT "organization_department_fk"
FOREIGN KEY ("organization_id")
REFERENCES "gsi_database"."information_schema"."organization" ("organization_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."project" ADD CONSTRAINT "organization_project_fk"
FOREIGN KEY ("organization_id")
REFERENCES "gsi_database"."information_schema"."organization" ("organization_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."support_system" ADD CONSTRAINT "organization_support_system_fk"
FOREIGN KEY ("organization_id")
REFERENCES "gsi_database"."information_schema"."organization" ("organization_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."ss_organization_unit" ADD CONSTRAINT "organization_unit_ss_organization_unit_fk"
FOREIGN KEY ("organization_unit_id")
REFERENCES "gsi_database"."information_schema"."organization_unit" ("organization_unit_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."process_dataclass" ADD CONSTRAINT "process_process_dataclass_fk"
FOREIGN KEY ("process_id")
REFERENCES "gsi_database"."information_schema"."process" ("process_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."ss_process" ADD CONSTRAINT "process_ss_process_fk"
FOREIGN KEY ("process_id")
REFERENCES "gsi_database"."information_schema"."process" ("process_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."dataclass" ADD CONSTRAINT "project_dataclass_fk"
FOREIGN KEY ("project_id")
REFERENCES "gsi_database"."information_schema"."project" ("project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."process" ADD CONSTRAINT "project_process_fk"
FOREIGN KEY ("project_id")
REFERENCES "gsi_database"."information_schema"."project" ("project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."project_user" ADD CONSTRAINT "project_project_user_fk"
FOREIGN KEY ("project_id")
REFERENCES "gsi_database"."information_schema"."project" ("project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."comment" ADD CONSTRAINT "subsystem_comment_fk"
FOREIGN KEY ("subsystem_id")
REFERENCES "gsi_database"."information_schema"."subsystem" ("subsystem_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."process_dataclass" ADD CONSTRAINT "subsystem_process_dataclass_fk"
FOREIGN KEY ("subsystem_id")
REFERENCES "gsi_database"."information_schema"."subsystem" ("subsystem_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."subsystem_relationship" ADD CONSTRAINT "subsystem_subsystem_relationship_fk1"
FOREIGN KEY ("subsystem_id_receives")
REFERENCES "gsi_database"."information_schema"."subsystem" ("subsystem_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."subsystem_relationship" ADD CONSTRAINT "subsystem_subsystem_relationship_fk"
FOREIGN KEY ("subsystem_id_sends")
REFERENCES "gsi_database"."information_schema"."subsystem" ("subsystem_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."ss_dataclass" ADD CONSTRAINT "support_system_ss_dataclass_fk"
FOREIGN KEY ("support_system_id")
REFERENCES "gsi_database"."information_schema"."support_system" ("support_system_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."ss_organization_unit" ADD CONSTRAINT "support_system_ss_organization_fk"
FOREIGN KEY ("support_system_id")
REFERENCES "gsi_database"."information_schema"."support_system" ("support_system_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."information_schema"."ss_process" ADD CONSTRAINT "support_system_ss_process_fk"
FOREIGN KEY ("support_system_id")
REFERENCES "gsi_database"."information_schema"."support_system" ("support_system_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;