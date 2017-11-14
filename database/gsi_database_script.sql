

CREATE SEQUENCE "gsi_database"."public"."account__account_id_seq";

CREATE TABLE "gsi_database"."public"."account" (
                "_account_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."public"."account__account_id_seq"'),
                "_account_username" VARCHAR(255),
                "_account_password" VARCHAR(65),
                "_account_email" VARCHAR(255),
                CONSTRAINT "_account_id" PRIMARY KEY ("_account_id")
);
COMMENT ON COLUMN "gsi_database"."public"."account"."_account_password" IS 'SHA-256 creates 65 character strings';


ALTER SEQUENCE "gsi_database"."public"."account__account_id_seq" OWNED BY "gsi_database"."public"."account"."_account_id";

CREATE SEQUENCE "gsi_database"."public"."comment__comment_id_seq";

CREATE TABLE "gsi_database"."public"."comment" (
                "_comment_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."public"."comment__comment_id_seq"'),
                "_comment_author" VARCHAR(255),
                "_comment_datetime" TIMESTAMP,
                "_comment_description" VARCHAR(500),
                "_subsystem_id" INTEGER NOT NULL,
                CONSTRAINT "_comment_id" PRIMARY KEY ("_comment_id")
);


ALTER SEQUENCE "gsi_database"."public"."comment__comment_id_seq" OWNED BY "gsi_database"."public"."comment"."_comment_id";

CREATE SEQUENCE "gsi_database"."public"."dataclass__dataclass_id_seq";

CREATE TABLE "gsi_database"."public"."dataclass" (
                "_dataclass_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."public"."dataclass__dataclass_id_seq"'),
                "_dataclass_name" VARCHAR(255),
                "_dataclass_description" VARCHAR(500),
                "_project_id" INTEGER NOT NULL,
                CONSTRAINT "_dataclass_id" PRIMARY KEY ("_dataclass_id")
);


ALTER SEQUENCE "gsi_database"."public"."dataclass__dataclass_id_seq" OWNED BY "gsi_database"."public"."dataclass"."_dataclass_id";

CREATE SEQUENCE "gsi_database"."public"."organization_unit__organization_unit_id_seq";

CREATE TABLE "gsi_database"."public"."organization_unit" (
                "_organization_unit_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."public"."organization_unit__organization_unit_id_seq"'),
                "_organization_unit_name" VARCHAR(255),
                CONSTRAINT "_organization_unit_id" PRIMARY KEY ("_organization_unit_id")
);


ALTER SEQUENCE "gsi_database"."public"."organization_unit__organization_unit_id_seq" OWNED BY "gsi_database"."public"."organization_unit"."_organization_unit_id";

CREATE SEQUENCE "gsi_database"."public"."process__process_id_seq";

CREATE TABLE "gsi_database"."public"."process" (
                "_process_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."public"."process__process_id_seq"'),
                "_process_name" VARCHAR(255),
                "_process_description" VARCHAR(500),
                "_project_id" INTEGER NOT NULL,
                CONSTRAINT "_process_id" PRIMARY KEY ("_process_id")
);


ALTER SEQUENCE "gsi_database"."public"."process__process_id_seq" OWNED BY "gsi_database"."public"."process"."_process_id";

CREATE TABLE "gsi_database"."public"."process_dataclass" (
                "_process_id" INTEGER NOT NULL,
                "_dataclass_id" INTEGER NOT NULL,
                "_process_dataclass_type" VARCHAR(30),
                "_subsystem_id" INTEGER NOT NULL,
                "_project_id" INTEGER NOT NULL,
                CONSTRAINT "_process_dataclass_id" PRIMARY KEY ("_process_id", "_dataclass_id")
);


CREATE SEQUENCE "gsi_database"."public"."project__project_id_seq";

CREATE TABLE "gsi_database"."public"."project" (
                "_project_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."public"."project__project_id_seq"'),
                "_project_name" VARCHAR(255),
                "_account_id_team_leader" INTEGER NOT NULL,
                "_account_id_secretary" INTEGER NOT NULL,
                CONSTRAINT "_project_id" PRIMARY KEY ("_project_id")
);


ALTER SEQUENCE "gsi_database"."public"."project__project_id_seq" OWNED BY "gsi_database"."public"."project"."_project_id";

CREATE TABLE "gsi_database"."public"."project_user" (
                "_project_id" INTEGER NOT NULL,
                "_account_id" INTEGER NOT NULL,
                "_project_user_role" VARCHAR(30),
                CONSTRAINT "_project_user_id" PRIMARY KEY ("_project_id", "_account_id")
);


CREATE TABLE "gsi_database"."public"."ss_dataclass" (
                "_support_system_id" INTEGER NOT NULL,
                "_dataclass_id" INTEGER NOT NULL,
                "_project_id" INTEGER NOT NULL,
                CONSTRAINT "_ss_dataclass_id" PRIMARY KEY ("_support_system_id", "_dataclass_id")
);


CREATE TABLE "gsi_database"."public"."ss_organization_unit" (
                "_support_system_id" INTEGER NOT NULL,
                "_organization_unit_id" INTEGER NOT NULL,
                "_ss_organization_unit_support_type" VARCHAR(30),
                "_project_id" INTEGER NOT NULL,
                CONSTRAINT "_ss_organization_unit_id" PRIMARY KEY ("_support_system_id", "_organization_unit_id")
);


CREATE TABLE "gsi_database"."public"."ss_process" (
                "_support_system_id" INTEGER NOT NULL,
                "_process_id" INTEGER NOT NULL,
                "ss_process_support_type" VARCHAR(30),
                "_project_id" INTEGER NOT NULL,
                CONSTRAINT "_ss_process_id" PRIMARY KEY ("_support_system_id", "_process_id")
);


CREATE SEQUENCE "gsi_database"."public"."subsystem__subsystem_id_seq";

CREATE TABLE "gsi_database"."public"."subsystem" (
                "_subsystem_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."public"."subsystem__subsystem_id_seq"'),
                "_subsystem_name" VARCHAR(255),
                "_subsystem_description" VARCHAR(500),
                "_subsystem_score_potencial_benefits" INTEGER,
                "_subsystem_score_impact" INTEGER,
                "_subsystem_score_prob_success" INTEGER,
                "_subsystem_score_demand" INTEGER,
                "_subsystem_score_cost" INTEGER,
                "_subsystem_score_dev_time" INTEGER,
                "_subsystem_score_total" INTEGER,
                CONSTRAINT "_subsystem_id" PRIMARY KEY ("_subsystem_id")
);


ALTER SEQUENCE "gsi_database"."public"."subsystem__subsystem_id_seq" OWNED BY "gsi_database"."public"."subsystem"."_subsystem_id";

CREATE TABLE "gsi_database"."public"."subsystem_relationship" (
                "_subsystem_id_sends" INTEGER NOT NULL,
                "_subsystem_id_receives" INTEGER NOT NULL,
                CONSTRAINT "_subsystem_relationship_id" PRIMARY KEY ("_subsystem_id_sends", "_subsystem_id_receives")
);


CREATE SEQUENCE "gsi_database"."public"."support_system__support_system_id_seq";

CREATE TABLE "gsi_database"."public"."support_system" (
                "_support_system_id" INTEGER NOT NULL DEFAULT nextval('"gsi_database"."public"."support_system__support_system_id_seq"'),
                "_support_system_name" VARCHAR(255),
                CONSTRAINT "_support_system_id" PRIMARY KEY ("_support_system_id")
);


ALTER SEQUENCE "gsi_database"."public"."support_system__support_system_id_seq" OWNED BY "gsi_database"."public"."support_system"."_support_system_id";

ALTER TABLE "gsi_database"."public"."project" ADD CONSTRAINT "account_project_fk1"
FOREIGN KEY ("_account_id_secretary")
REFERENCES "gsi_database"."public"."account" ("_account_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."project" ADD CONSTRAINT "account_project_fk"
FOREIGN KEY ("_account_id_team_leader")
REFERENCES "gsi_database"."public"."account" ("_account_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."project_user" ADD CONSTRAINT "user_project_user_fk"
FOREIGN KEY ("_account_id")
REFERENCES "gsi_database"."public"."account" ("_account_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."process_dataclass" ADD CONSTRAINT "dataclass_process_dataclass_fk"
FOREIGN KEY ("_dataclass_id")
REFERENCES "gsi_database"."public"."dataclass" ("_dataclass_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_dataclass" ADD CONSTRAINT "dataclass_ss_dataclass_fk"
FOREIGN KEY ("_dataclass_id")
REFERENCES "gsi_database"."public"."dataclass" ("_dataclass_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_organization_unit" ADD CONSTRAINT "organization_unit_ss_organization_unit_fk"
FOREIGN KEY ("_organization_unit_id")
REFERENCES "gsi_database"."public"."organization_unit" ("_organization_unit_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."process_dataclass" ADD CONSTRAINT "process_process_dataclass_fk"
FOREIGN KEY ("_process_id")
REFERENCES "gsi_database"."public"."process" ("_process_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_process" ADD CONSTRAINT "process_ss_process_fk"
FOREIGN KEY ("_process_id")
REFERENCES "gsi_database"."public"."process" ("_process_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."dataclass" ADD CONSTRAINT "project_dataclass_fk"
FOREIGN KEY ("_project_id")
REFERENCES "gsi_database"."public"."project" ("_project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."process" ADD CONSTRAINT "project_process_fk"
FOREIGN KEY ("_project_id")
REFERENCES "gsi_database"."public"."project" ("_project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."process_dataclass" ADD CONSTRAINT "project_process_dataclass_fk"
FOREIGN KEY ("_project_id")
REFERENCES "gsi_database"."public"."project" ("_project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."project_user" ADD CONSTRAINT "project_project_user_fk"
FOREIGN KEY ("_project_id")
REFERENCES "gsi_database"."public"."project" ("_project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_dataclass" ADD CONSTRAINT "project_ss_dataclass_fk"
FOREIGN KEY ("_project_id")
REFERENCES "gsi_database"."public"."project" ("_project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_organization_unit" ADD CONSTRAINT "project_ss_organization_unit_fk"
FOREIGN KEY ("_project_id")
REFERENCES "gsi_database"."public"."project" ("_project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_process" ADD CONSTRAINT "project_ss_process_fk"
FOREIGN KEY ("_project_id")
REFERENCES "gsi_database"."public"."project" ("_project_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."comment" ADD CONSTRAINT "subsystem_comment_fk"
FOREIGN KEY ("_subsystem_id")
REFERENCES "gsi_database"."public"."subsystem" ("_subsystem_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."process_dataclass" ADD CONSTRAINT "subsystem_process_dataclass_fk"
FOREIGN KEY ("_subsystem_id")
REFERENCES "gsi_database"."public"."subsystem" ("_subsystem_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."subsystem_relationship" ADD CONSTRAINT "subsystem_subsystem_relationship_fk1"
FOREIGN KEY ("_subsystem_id_receives")
REFERENCES "gsi_database"."public"."subsystem" ("_subsystem_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."subsystem_relationship" ADD CONSTRAINT "subsystem_subsystem_relationship_fk"
FOREIGN KEY ("_subsystem_id_sends")
REFERENCES "gsi_database"."public"."subsystem" ("_subsystem_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_dataclass" ADD CONSTRAINT "support_system_ss_dataclass_fk"
FOREIGN KEY ("_support_system_id")
REFERENCES "gsi_database"."public"."support_system" ("_support_system_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_organization_unit" ADD CONSTRAINT "support_system_ss_organization_fk"
FOREIGN KEY ("_support_system_id")
REFERENCES "gsi_database"."public"."support_system" ("_support_system_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE "gsi_database"."public"."ss_process" ADD CONSTRAINT "support_system_ss_process_fk"
FOREIGN KEY ("_support_system_id")
REFERENCES "gsi_database"."public"."support_system" ("_support_system_id")
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

insert into gsi_database.public.account (_account_username, _account_password, _account_email) values('afonso', 'afonso', 'afonso@bsp.com');
insert into gsi_database.public.account (_account_username, _account_password, _account_email) values('gabriel', 'gabriel', 'gabriel@bsp.com');
insert into gsi_database.public.account (_account_username, _account_password, _account_email) values('cena', 'cena', 'cena@bsp.com');
insert into gsi_database.public.account (_account_username, _account_password, _account_email) values('jose', 'jose', 'jose@bsp.com');