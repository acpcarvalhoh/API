const fs = require("fs")
const paht = require("path")
const uploadConfig = require("../configs/uploads");
const path = require("path");

class DiskStorage{
    async save(file){
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            paht.resolve(uploadConfig.UPLOADS_FOLDER, file)
        );


        return file;
    };

    async delete(file){
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

        try{

            fs.promises.stat(filePath)

        } catch{
            return
        };

        await fs.promises.unlink(filePath)
    };
};



module.exports = DiskStorage;