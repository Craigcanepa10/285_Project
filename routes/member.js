module.exports = class Member
{
    constructor(name,
                email_address,
                major,
                w_num,
                signup_date,
                renewal_date,
                expiration_date)
    {
        this.name = name,
        this.email_address = email_address,
        this.major = major,
        this.w_num = w_num,
        this.signup_date = signup_date,
        this.renewal_date = renewal_date,
        this.expiration_date = expiration_date
    }
}
