const Discord = require('discord.js');
const client = new Discord.Client();
var tc = require("termcolor").define;
var print = console.green;
const clear = require('clear-it')
clear()

var input = require('readline-sync');
var option = input.question("Enter 1 // Tysik one love :)")

if(option === "1") {
  clear()
var serverid = input.question("Enter server id")
var channelid = input.question("enter channel id")
var msg = input.question("enter message")
cache = {
  serverid: serverid,
  channelid: channelid,
  msg: msg,
}}
client.on('ready', () => {
    client.guilds.get(cache.serverid).channels.get(cache.channelid).send(cache.msg)
    print("Отправилось 1 сообщение");

})
   
client.login("");




