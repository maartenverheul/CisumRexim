// Generated from d:\Code Projects\Git\Appinda\CisumRexim\src\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ConsoleParser.
function ConsoleListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ConsoleListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ConsoleListener.prototype.constructor = ConsoleListener;

// Enter a parse tree produced by ConsoleParser#command.
ConsoleListener.prototype.enterCommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#command.
ConsoleListener.prototype.exitCommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#playcommand.
ConsoleListener.prototype.enterPlaycommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#playcommand.
ConsoleListener.prototype.exitPlaycommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#stopcommand.
ConsoleListener.prototype.enterStopcommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#stopcommand.
ConsoleListener.prototype.exitStopcommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#stopallcommand.
ConsoleListener.prototype.enterStopallcommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#stopallcommand.
ConsoleListener.prototype.exitStopallcommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#stopcuecommand.
ConsoleListener.prototype.enterStopcuecommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#stopcuecommand.
ConsoleListener.prototype.exitStopcuecommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#setcommand.
ConsoleListener.prototype.enterSetcommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#setcommand.
ConsoleListener.prototype.exitSetcommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#setthemecommand.
ConsoleListener.prototype.enterSetthemecommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#setthemecommand.
ConsoleListener.prototype.exitSetthemecommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#setsettingcommand.
ConsoleListener.prototype.enterSetsettingcommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#setsettingcommand.
ConsoleListener.prototype.exitSetsettingcommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#consoleCommand.
ConsoleListener.prototype.enterConsoleCommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#consoleCommand.
ConsoleListener.prototype.exitConsoleCommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#consoleExpandCommand.
ConsoleListener.prototype.enterConsoleExpandCommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#consoleExpandCommand.
ConsoleListener.prototype.exitConsoleExpandCommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#consoleCollapseCommand.
ConsoleListener.prototype.enterConsoleCollapseCommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#consoleCollapseCommand.
ConsoleListener.prototype.exitConsoleCollapseCommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#consoleToggleCommand.
ConsoleListener.prototype.enterConsoleToggleCommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#consoleToggleCommand.
ConsoleListener.prototype.exitConsoleToggleCommand = function(ctx) {
};


// Enter a parse tree produced by ConsoleParser#consoleClearCommand.
ConsoleListener.prototype.enterConsoleClearCommand = function(ctx) {
};

// Exit a parse tree produced by ConsoleParser#consoleClearCommand.
ConsoleListener.prototype.exitConsoleClearCommand = function(ctx) {
};



exports.ConsoleListener = ConsoleListener;