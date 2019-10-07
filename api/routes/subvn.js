'use strict';

module.exports = function(api) {
    const subvnController = require('../controllers/subvn');

    api.route('/subvn')
        .get(subvnController.getProvincesWithDetail)

    api.route('/subvn/getProvinces')
        .get(subvnController.getProvinces)

    api.route('/subvn/getDistricts')
        .get(subvnController.getDistricts)

    api.route('/subvn/getWards')
        .get(subvnController.getWards)

    api.route('/subvn/getDistrictsByProvinceCode/:provinceCode')
        .get(subvnController.getDistrictsByProvinceCode)

    api.route('/subvn/getWardsByDistrictCode/:districtCode')
        .get(subvnController.getWardsByDistrictCode)

    api.route('/subvn/getWardsByProvinceCode/:provinceCode')
        .get(subvnController.getWardsByProvinceCode)

}