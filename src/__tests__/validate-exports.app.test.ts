import * as actualExports from '../index';

const intendedExports: string[] = [
  /* Config */
  'readOption',

  /* Secrets */
  'fetchPublicKey',
  'setSecret',
];

describe('Validate exports', () => {

  const actualExportNames = Object.keys(actualExports);

  it('exports should include all intended exports', () => {
    for (const exportName of intendedExports) {
      expect(actualExportNames).toContain(exportName);
    }
  });


  it('exports should not include any unintended exports', () => {
    for (const exportName of actualExportNames) {
      expect(intendedExports).toContain(exportName);
    }
  });
});
