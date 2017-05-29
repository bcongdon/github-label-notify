# github-label-notify

[![Greenkeeper badge](https://badges.greenkeeper.io/bcongdon/github-label-notify.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/github-label-notify.svg)](https://badge.fury.io/js/github-label-notify)
[![Code Climate](https://codeclimate.com/github/benjamincongdon/github-label-notify/badges/gpa.svg)](https://codeclimate.com/github/benjamincongdon/github-label-notify)
[![Build Status](https://travis-ci.org/bcongdon/github-label-notify.svg?branch=master)](https://travis-ci.org/bcongdon/github-label-notify)
> :mailbox: Get notified about new issues with specific label

## Installation
1. Run `npm install -g github-label-notify`
2. Go to the [IFTTT Maker Channel](https://ifttt.com/maker), activate the channel, and record your maker key.
3. Duplicate the [template IFTTT recipe](https://ifttt.com/recipes/421344-github-label-notify-template-recipe) - which uses the GMail channel - or setup a new IFTTT recipe that uses the Maker channel with event name `new_github_issue` as the trigger.
4. Run `glnotify setup` and enter your IFTTT key.
5. Run `glnotify add` to add repositories and labels to your watch list.
	* Alternatively, you can directly edit `watch_list.json`
6. Run `glnotify init` to mark all current issues as 'read'. This is **important**. If you do not, running `glnotify` will spam you with a backlog of notifications.
7. Run `glnotify` to start listening for new Github issues per your watchlist.

## IFTTT Recipe Template

#### Event Name:
`new_github_issue`

#### Email Message:

##### Subject:

```
[Github-Notify] New Issue with labels: {{Value2}}
```

##### Body: 

```
New Issue: {{Value1}}<br>
Labels: {{Value2}}<br>
Link: {{Value3}}
```

### Advanced
If you wish to make your own type of notification from `github_label_notify`, the 'values' given by the module are as follows:

* `Value1`: Issue Title + Number
* `Value2`: Issue Labels (comma separated)
* `Value3`: Link to the Github issue