import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "StorageSize" })
export class StorageSizePipe implements PipeTransform {
  transform(bytes: number = 0, format?: string) {
    let sizes = ["B", "KB", "MB", "GB", "TB"];
    let index = 0;
    let size = bytes;

    if (format) {
      format = format.toLocaleUpperCase();
      index = sizes.indexOf(format);
    }

    if (index <= 0) {
      let length = bytes.toString().length;
      index = Math.floor((length - 1) / 3);
      format = sizes[index];
    }

    size = bytes / Math.pow(1024, index);

    return `${size.toFixed(1)} ${format}`;
    /* if (format) {
      format = format.toLocaleUpperCase();
      let index = sizes.indexOf(format);
      let size = bytes / Math.pow(1024, index);

      return `$size.toFixed(1)} ${format}`;
    } else {
      let size = sizes.reduce((result, size, index) => {
        let _size = result / Math.pow(1024, index);

        return _size;
      }, bytes);

      return `$size.toFixed(1)} ${format}`;
    } */
  }
}
