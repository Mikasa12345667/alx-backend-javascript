/**
 * Contains the miscellaneous route handlers.
 * @author Gabriel Odera <https://github.com/Mikasa12345667>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
