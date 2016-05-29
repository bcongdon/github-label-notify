var assert = require('assert');
var expect = require('chai').expect;

var watch_list = require('./../utils/watch_list.js');

describe('watch_list.js', function () {
    describe('data()', function(){
        it('should return truthy', function(){
            expect(watch_list.data()).to.be.truthy;
        });
    });
    describe('create_entry()', function(){
        it('should correctly add a new repo', function(){
            watch_list.create_entry('user', 'repo', ['fun label']);
            expect(watch_list.data()).to.include({'user': 'user',
                'repo': 'repo',
                'labels': ['fun label']})
        });
    });
    after(function(){
        // Clear test repos
        watch_list.save([]);
    });
});