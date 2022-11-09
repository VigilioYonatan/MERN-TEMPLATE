const mapMulterFilesFilename = (files: Express.Multer.File[]) => {
    const imagenes = files?.map((image) => image.filename);
    return imagenes;
};

export { mapMulterFilesFilename };
