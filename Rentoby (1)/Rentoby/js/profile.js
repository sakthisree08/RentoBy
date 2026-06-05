// profile.js — profile page helpers

const Profile = {
  KEY: 'rentoby_profile',

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || this.defaults();
    } catch { return this.defaults(); }
  },

  defaults() {
    return {
      name: 'Arjun Mehta',
      email: 'arjun.mehta@email.com',
      phone: '+91 98765 43210',
      city: 'Bengaluru',
      pincode: '560001',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80'
    };
  },

  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify({ ...this.get(), ...data }));
  }
};
