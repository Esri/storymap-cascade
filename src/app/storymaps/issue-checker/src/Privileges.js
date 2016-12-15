export default class Privileges {
  constructor(isPublicAccount) {
    this.canShareMineOrg = false;
    this.canShareMinePublic = false;
    this.canShareOthersOrg = false;
    this.canShareOthersPublic = false;

    if (isPublicAccount) {
      this.canShareMineOrg = true;
      this.canShareMinePublic = true;
    }
  }

  static findPrivileges(portal) {
    if (!portal.user.orgId) {
      return new Privileges(true);
    }
    else {
      let privileges = this._findOrgPrivileges(portal.user.privileges);

      let isAdmin = this._checkIfAdmin(portal.user);
      // if public sharing has been disabled at the org level, unless you're admin, you can't share publicly.
      if (!portal.canSharePublic && !isAdmin) {
        privileges.canShareMinePublic = false;
        privileges.canShareOthersPublic = false;
      }

      return privileges;
    }
  }

  static _findOrgPrivileges(portalPrivileges) {
    let privileges = new Privileges(false);

    for (let privilege of portalPrivileges) {
      if (privilege === 'portal:user:shareToPublic') {
        privileges.canShareMinePublic = true;
      }
      else if (privilege === 'portal:user:shareToOrg') {
        privileges.canShareMineOrg = true;
      }
      else if (privilege === 'portal:admin:shareToPublic') {
        privileges.canShareMinePublic = true;

        if (portalPrivileges.indexOf('portal:admin:viewItems') !== -1 && portalPrivileges.indexOf('portal:admin:updateItems') !== -1) {
          privileges.canShareOthersPublic = true;
        }
      }
      else if (privilege === 'portal:admin:shareToOrg') {
        privileges.canShareMineOrg = true;

        if (portalPrivileges.indexOf('portal:admin:viewItems') !== -1 && portalPrivileges.indexOf('portal:admin:updateItems') !== -1) {
          privileges.canShareOthersOrg = true;
        }
      }
    }

    return privileges;
  }

  static _checkIfAdmin(portalUser) {
    if (portalUser.role.toLowerCase() === 'org_admin' && !portalUser.roleId) {
      return true;
    }
    else {
      return false;
    }
  }
}
