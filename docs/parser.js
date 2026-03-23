// parser.js

const axios = require('axios');
const xml2js = require('xml2js');

const Parser = {
  async parseXml(xmlString) {
    try {
      const parser = new xml2js.Parser();
      const result = await parser.parseStringPromise(xmlString);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async parseJson(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      throw error;
    }
  },

  async parseXmlFile(filePath) {
    try {
      const xmlString = await this.readFile(filePath);
      return this.parseXml(xmlString);
    } catch (error) {
      throw error;
    }
  },

  async readFile(filePath) {
    try {
      const response = await axios.get(filePath);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

};

module.exports = Parser;