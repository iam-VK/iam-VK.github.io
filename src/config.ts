export const SITE_CONFIG = {
    name: 'Vishwa',
    fullName: 'Vishwa Kumar',

    // Social & contact links
    github: 'https://github.com/iam-VK',
    linkedin: 'https://linkedin.com/in/vishwakumar-s',
    email: 'vishwakumar.petit@gmail.com',
    phone: '+919488321830',
    phoneDisplay: '+91 9488321830',

    // Derived helpers
    get mailtoLink() {
        return `mailto:${this.email}`
    },
    get telLink() {
        return `tel:${this.phone}`
    },
}
