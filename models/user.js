var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

var userSchema = new Schema ({
    name: String,
    password: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true},
    }, {
        timestamps: true
    });
    
    userSchema.set('toJSON', {
    transform: function(doc, ret) {
        // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
    });

    userSchema.pre('save', function(next){
        const user = this;
        if (!user.isModified('password')) return next();
        bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
            if (err) return next(err);
            // replace the user provided password with the hash
            user.password = hash;
            next();
          });
    });

module.exports = mongoose.model('User', userSchema);