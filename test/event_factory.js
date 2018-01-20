import 'babel-polyfill';
import Chai from 'chai';
import ChaiAsPromised from 'chai-as-promised';

import EventFactory from '../src/event_factory';
import ContractUtils from './util/contract_utils';
import TestConfig from './config/test_config';
import Mocks from './mock/event_factory';

Chai.use(ChaiAsPromised);
const assert = Chai.assert;

describe('EventFactory', () => {
  describe('createTopic()', () => {
    it('returns a tx receipt', () => {
      const res = Mocks.createTopic.result;
      assert.isTrue(ContractUtils.isTxReceipt(res));
    });
  });
});
