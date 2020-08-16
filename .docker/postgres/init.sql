CREATE TABLE catalog
(
    id integer NOT NULL,
    "packTitle" character varying COLLATE pg_catalog."default" NOT NULL,
    "packDescription" character varying COLLATE pg_catalog."default" NOT NULL,
    "isActive" boolean NOT NULL DEFAULT true,
    CONSTRAINT "PK_782754bded12b4e75ad4afff913" PRIMARY KEY (id)
);
						
INSERT INTO catalog ("packTitle", "packDescription")
VALUES ('Test Pack 1', 'test pack description');