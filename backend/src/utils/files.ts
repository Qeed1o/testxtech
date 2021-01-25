import { UploadedFile } from "express-fileupload"
import sharp from 'sharp'

export const resizeAndSaveAvatar = async (avatar: UploadedFile) => {
    await sharp(avatar.data).resize(250, 250).toFile(`./images/${avatar.name}`)
}