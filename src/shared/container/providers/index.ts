import { container } from 'tsyringe';

import RedisCacheProvider from './CacheProvider/implementations/RedisCacheProvider';
import ICacheProvider from './CacheProvider/models/ICacheProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';
import IMailProvider from './MailProvider/models/IMailProvider';
import HandlebarsMailTemplateProvider from './MailTemplateProvider/implementatios/HandlebarsMailTemplateProvider';
import IMailTemplateProvider from './MailTemplateProvider/models/IMailTemplateProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
import IStorageProvider from './StorageProvider/models/IStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);

container.registerSingleton<ICacheProvider>(
  'CacheProvider',
  RedisCacheProvider,
);
