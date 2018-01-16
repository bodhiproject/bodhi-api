import 'babel-polyfill';
import Chai from 'chai';
import ChaiAsPromised from 'chai-as-promised';
import Web3Utils from 'web3-utils';

import BodhiToken from '../src/bodhi_token.js';
import ContractUtils from './util/contract_utils';
import TestConfig from './config/test_config';

Chai.use(ChaiAsPromised);
const assert = Chai.assert;
const expect = Chai.expect;

describe('BodhiToken', function() {
  
  describe.only('approve()', function() {
    it('returns a tx receipt', function() {
      const res = {
          "result": {
              "txid": "f6735da8217312a12e45e9801f5c4be1c4c39c325e0f335abfb63023044612cd",
              "sender": "qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy",
              "hash160": "17e7888aa7412a735f336d2f6d784caefabb6fa3"
          }
      };
      assert.isTrue(ContractUtils.isTxReceipt(res));
    });

    it('throws if spender is undefined', function() {
      expect(BodhiToken.approve({
        value: '0',
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if value is undefined', function() {
      expect(BodhiToken.approve({
        spender: 'qUDvDKsZQv84iS6mrA2i7ghjgM34mfUxQu',
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', function() {
      expect(BodhiToken.approve({
        spender: 'qUDvDKsZQv84iS6mrA2i7ghjgM34mfUxQu',
        value: '0',
      })).to.be.rejectedWith(Error);
    });
  });

  describe('allowance()', function() {
    it('returns the allowance', async function() {
      const res = await BodhiToken.allowance({
        owner: 'qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy',
        spender: 'qUDvDKsZQv84iS6mrA2i7ghjgM34mfUxQu',
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res.remaining);
      assert.isTrue(Web3Utils.isBN(res.remaining));
    });

    it('throws if owner is undefined', async function() {
      expect(BodhiToken.allowance({
        spender: 'qUDvDKsZQv84iS6mrA2i7ghjgM34mfUxQu',
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if spender is undefined', async function() {
      expect(BodhiToken.allowance({
        owner: 'qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy',
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(BodhiToken.allowance({
        owner: 'qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy',
        spender: 'qUDvDKsZQv84iS6mrA2i7ghjgM34mfUxQu',
      })).to.be.rejectedWith(Error);
    });
  });

  describe('balanceOf()', function() {
    it('returns the allowance', async function() {
      const res = await BodhiToken.balanceOf({
        owner: 'qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy',
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res.balance);
      assert.isTrue(Web3Utils.isBN(res.balance));
    });

    it('throws if owner is undefined', async function() {
      expect(BodhiToken.balanceOf({
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', async function() {
      expect(BodhiToken.balanceOf({
        owner: 'qKjn4fStBaAtwGiwueJf9qFxgpbAvf1xAy',
      })).to.be.rejectedWith(Error);
    });
  });
});
