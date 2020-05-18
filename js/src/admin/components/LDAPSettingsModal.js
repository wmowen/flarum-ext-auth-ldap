import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

const settingsPrefix = 'tituspijean-auth-ldap.';
const translationPrefix = 'tituspijean-auth-ldap.admin.settings.';

export default class LDAPSettingsModal extends SettingsModal {
	title() {
		return app.translator.trans(translationPrefix + 'title');
	}

	form() {
		return [
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.method_name')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'method_name'),
					placeholder: 'LDAP'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.hosts')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'hosts'),
					placeholder: 'localhost'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.base_dn')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'base_dn'),
					placeholder: 'ou=users,dc=yunohost,dc=org'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.filter')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'filter'),
					placeholder: '(&(objectClass=posixAccount)(permission=cn=flarum.main,ou=permission,dc=yunohost,dc=org)'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.port')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'port'),
					placeholder: '389'
				})
			]),
			m('.Form-group', [
				m('label', Switch.component({
					state: [true, '1'].indexOf(this.setting(settingsPrefix + 'follow_referrals')()) !== -1,
					onchange: this.setting(settingsPrefix + 'follow_referrals'),
					children: app.translator.trans(translationPrefix + 'follow_referrals')
				}))
			]),
			m('.Form-group', [
				m('label', Switch.component({
					state: [true, '1'].indexOf(this.setting(settingsPrefix + 'use_ssl')()) !== -1,
					onchange: this.setting(settingsPrefix + 'use_ssl'),
					children: app.translator.trans(translationPrefix + 'use_ssl')
				}))]),
			m('.Form-group', [
				m('label', Switch.component({
					state: [true, '1'].indexOf(this.setting(settingsPrefix + 'use_tls')()) !== -1,
					onchange: this.setting(settingsPrefix + 'use_tls'),
					children: app.translator.trans(translationPrefix + 'use_tls')
				}))
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.admin_dn')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'admin_dn'),
					placeholder: 'cn=admin,dc=yunohost,dc=org'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.admin_password')),
				m('input.FormControl', {
									type: 'password',
									bidi: this.setting(settingsPrefix + 'admin_password'),
									placeholder: 'password'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.search_user_fields')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'search_user_fields'),
					placeholder: 'cn,mail'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.user_mail')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'user_mail'),
					placeholder: 'mail'
				})
			]),
			m('.Form-group', [
				m('label', app.translator.trans(translationPrefix + 'field.user_username')),
				m('input.FormControl', {
					bidi: this.setting(settingsPrefix + 'user_username'),
					placeholder: 'uid'
				})
			]),
			m('.Form-group', [
				m('label', Switch.component({
					state: [true, '1'].indexOf(this.setting(settingsPrefix + 'onlyUse')()) !== -1,
					onchange: this.setting(settingsPrefix + 'onlyUse'),
					children: app.translator.trans(translationPrefix + 'onlyUse')
				}))
			])
		];
	}
}
