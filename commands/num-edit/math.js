const Command = require('../../structures/Command');
const math = require('mathjs');

module.exports = class MathCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'math',
			group: 'num-edit',
			memberName: 'math',
			description: 'Calculates math expressions.',
			args: [
				{
					key: 'expression',
					prompt: 'What expression would you like to calculate?',
					type: 'string'
				}
			]
		});
	}

	run(msg, { expression }) {
		try {
			return msg.say(math.eval(expression).toString()).catch(() => msg.say('Invalid expression.'));
		} catch (err) {
			return msg.say('Invalid expression.');
		}
	}
};