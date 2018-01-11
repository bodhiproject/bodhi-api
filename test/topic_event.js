import 'babel-polyfill';
import Chai from 'chai';
import ChaiAsPromised from 'chai-as-promised';
import Web3Utils from 'web3-utils';

import TopicEvent from '../src/topic_event';
import ContractUtils from './util/contract_utils';
import TestConfig from './config/test_config';

Chai.use(ChaiAsPromised);
const assert = Chai.assert;
const expect = Chai.expect;

describe('TopicEvent', function() {
  const contractAddress = 'e4ba4d301d4c22d2634a3d8e23c47b7e9e4ef4df';

  describe('withdrawWinnings()', function() {
    it('returns a tx receipt', async function() {
      const res = await TopicEvent.withdrawWinnings({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isTrue(ContractUtils.isTxReceipt(res));
    });

    it('throws if contractAddress is undefined', async function() {
      expect(TopicEvent.withdrawWinnings({
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(TopicEvent.withdrawWinnings({
        contractAddress: contractAddress,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('version()', function() {
    it('returns the version', async function() {
      const res = await TopicEvent.version({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res[0]);
      assert.isTrue(Web3Utils.isBN(res[0]));
    });

    it('throws if contractAddress is undefined', async function() {
      expect(TopicEvent.version({
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(TopicEvent.version({
        contractAddress: contractAddress,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('totalQtumValue()', function() {
    it('returns the totalQtumValue', async function() {
      const res = await TopicEvent.totalQtumValue({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res[0]);
      assert.isTrue(Web3Utils.isBN(res[0]));
    });

    it('throws if contractAddress is undefined', async function() {
      expect(TopicEvent.totalQtumValue({
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(TopicEvent.totalQtumValue({
        contractAddress: contractAddress,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('totalBotValue()', function() {
    it('returns the totalBotValue', async function() {
      const res = await TopicEvent.totalBotValue({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res[0]);
      assert.isTrue(Web3Utils.isBN(res[0]));
    });

    it('throws if contractAddress is undefined', async function() {
      expect(TopicEvent.totalBotValue({
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(TopicEvent.totalBotValue({
        contractAddress: contractAddress,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('getFinalResult()', function() {
    it('returns the final result and valid flag', async function() {
      const res = await TopicEvent.getFinalResult({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res[0]);
      assert.isTrue(Web3Utils.isBN(res[0]));
      assert.isDefined(res[1]);
      assert.isBoolean(res[1]);
    });

    it('throws if contractAddress is undefined', async function() {
      expect(TopicEvent.getFinalResult({
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(TopicEvent.getFinalResult({
        contractAddress: contractAddress,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('status()', function() {
    it('returns the status', async function() {
      const res = await TopicEvent.status({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res[0]);
      assert.isTrue(Web3Utils.isBN(res[0]));
    });

    it('throws if contractAddress is undefined', async function() {
      expect(TopicEvent.status({
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(TopicEvent.status({
        contractAddress: contractAddress,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('didWithdraw()', function() {
    const address = 'qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy';
    
    it('returns the didWithdraw flag', async function() {
      const res = await TopicEvent.didWithdraw({
        contractAddress: contractAddress,
        address: address,
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res[0]);
      assert.isBoolean(res[0]);
    });

    it('throws if contractAddress is undefined', async function() {
      expect(TopicEvent.didWithdraw({
        address: address,
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if address is undefined', async function() {
      expect(TopicEvent.didWithdraw({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(TopicEvent.didWithdraw({
        contractAddress: contractAddress,
        address: address,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('calculateWinnings()', function() {
    it('returns the BOT and QTUM winnings', async function() {
      const res = await TopicEvent.calculateWinnings({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res[0]);
      assert.isDefined(res[1]);
      assert.isTrue(Web3Utils.isBN(res[0]));
      assert.isTrue(Web3Utils.isBN(res[1]));
    });

    it('throws if contractAddress is undefined', async function() {
      expect(TopicEvent.calculateWinnings({
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(TopicEvent.calculateWinnings({
        contractAddress: contractAddress,
      })).to.be.rejectedWith(Error);
    });
  });
});
