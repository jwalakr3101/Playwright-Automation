class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByLabel('Email');
    this.password = page.getByLabel('Password');
    this.signIn = page.getByRole('button', { name: /sign in/i });
    this.register = page.getByRole('link', { name: /register/i });
  }

  async open() {
    await this.page.goto('/');
  }

  async signInAs(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signIn.click();
    await this.page.getByTestId('nav-home').waitFor();
  }
}

module.exports = { LoginPage };
