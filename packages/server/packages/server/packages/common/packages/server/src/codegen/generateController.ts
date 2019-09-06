import appRootPath = require('app-root-path');
import { getFields } from './getFields';
import { createSorce } from './generateSource';

export const generateController = async (tableName: string, dto: string, service: string) => {
  const baseName = `${service[0].toUpperCase()}${service.slice(1)}`;
  const serviceName = `${baseName}Service`;
  const controllerName = `${baseName}Controller`;
  const router = `api/${service}`.toLowerCase();
  console.log(router);
  const interfaceName = `I${dto[0].toUpperCase()}${dto.slice(1)}DTO`;
  const filePrefixDTO = dto;
  const filePrefix = `${service[0].toLowerCase()}${service.slice(1)}`;

  const templateRootPath = `${appRootPath.path}/src/codegen/templates`;
  const sourceRootPath = `${appRootPath.path}/src/server`;

  const fields = await getFields(tableName);

  // Create *.dto.ts
  createSorce({
    templatePath: `${templateRootPath}/dto.hbs`,
    data: {
      interfaceName,
      fields
    },
    sourcePath: `${sourceRootPath}/${router}/${filePrefixDTO}.dto.ts`
  });

  // Create *.service.ts
  createSorce({
    templatePath: `${templateRootPath}/service.hbs`,
    data: {
      tableName,
      serviceName,
      interfaceName,
      filePrefixDTO,
      fields
    },
    sourcePath: `${sourceRootPath}/${router}/${filePrefix}.service.ts`
  });

  // Create *.controller.ts
  createSorce({
    templatePath: `${templateRootPath}/controller.hbs`,
    data: {
      filePrefixDTO,
      router,
      controllerName,
      service,
      serviceName,
      interfaceName,
      fields
    },
    sourcePath: `${sourceRootPath}/${router}/${filePrefix}.controller.ts`
  });
};
