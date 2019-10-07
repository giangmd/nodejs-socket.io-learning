'use strict';

const subvn = require('sub-vn')

exports.index = (req, res) => {
    res.json({status: "It's work!"});
}

exports.getProvinces = (req, res) => {
    const data = subvn.getProvinces()

    res.json({data: data})
}

exports.getDistricts = (req, res) => {
    const data = subvn.getDistricts()

    res.json({data: data})
}

exports.getWards = (req, res) => {
    const data = subvn.getWards()

    res.json({data: data})
}

exports.getProvincesWithDetail = (req, res) => {
    const data = subvn.getProvincesWithDetail()

    res.json({data: data})
}

exports.getDistrictsByProvinceCode = (req, res) => {

    const data = subvn.getDistrictsByProvinceCode(req.params.provinceCode)
    res.json({data: data})

}

exports.getWardsByDistrictCode = (req, res) => {

    const data = subvn.getWardsByDistrictCode(req.params.districtCode)
    res.json({data: data})

}

exports.getWardsByProvinceCode = (req, res) => {

    const data = subvn.getWardsByProvinceCode(req.params.provinceCode)
    res.json({data: data})

}

