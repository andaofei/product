import lbp from "../images/lbp.png";
import label from "../images/makel.png";
// import label from "../images/test/test@3x.png";

import liver from "../images/liver.png";
import ultrasound from "../images/ultrasound.png";
import information from "../images/information.png";
import gland from "../images/gland.png";
import lung from "../images/lung.png";
import eye from "../images/eye.png";

// 悬浮图
import uterus from "../images/uterus-hover.png";
import group from "../images/Group-hover.png";
import liver2 from "../images/liver-hover.png";
import ct2 from "../images/ctimg-hover.png";
import database from "../images/database-hover.png";
import combined from "../images/combined-hover.png";
import lung2 from "../images/lung-hover.png";
import eye2 from "../images/eye-hover.png";

const DataList = [
    {
        title: '宫颈细胞学智能筛查一体化解决方案',
        id: 1,
        url: 'http://lbp.tsimage.cn',
        // url: 'http://lbp2.0.tsimage.cn.s3-website.cn-north-1.amazonaws.com.cn',
        bg: lbp,
        hover: uterus,
        text: '宫颈细胞学智能筛查一体化解决方案',
        slogan: 'AI让宫颈病理检测更轻松'
    },
    {
        title: '宫颈病理智能标注系统',
        id: 2,
        url: 'https://label.tsimage.cn/job/#/',
        bg: label,
        hover: group,
        text: '宫颈病理智能标注系统',
        slogan: '火眼金睛辨识病变细胞'
    },
    {
        title: '肝部CT影像智能分析平台',
        id: 3,
        url: 'http://liver.tsimage.cn',
        bg: liver,
        hover: liver2,
        text: '肝部CT影像智能分析平台',
        slogan: '病灶定位，诊断一步到位'
    },
    {
        title: '乳腺超声影像智能分析平台',
        id: 4,
        url: 'http://ultrasonics.tsimage.cn',
        bg: ultrasound,
        hover: ct2,
        text: '乳腺超声影像智能分析平台',
        slogan: '乳腺疾病早发现早治愈'
    },
    {
        title: '病理信息智能管理系统',
        id: 5,
        url: 'http://pathologyinfo.tsimage.cn',
        bg: information,
        hover: database,
        text: '病理信息智能管理系统',
        slogan: '统一的结构化病理数据库'
    },
    {
        title: '乳腺病理智能筛查一体化解决方案',
        id: 6,
        url: 'http://breast.tsimage.cn',
        bg: gland,
        hover: combined,
        text: '乳腺病理智能筛查一体化解决方案',
        slogan: 'AI助力女性健康'
    },
    {
        title: '肺部CT影像智能分析平台',
        id: 7,
        url: 'http://lung.tsimage.cn',
        bg: lung,
        hover: lung2,
        text: '肺部CT影像智能分析平台',
        slogan: '肺结节筛查减轻医生工作'
    },
    {
        title: '眼科OCT影像智能分析平台',
        id: 8,
        url: 'http://oct.tsimage.cn/',
        bg: eye,
        hover: eye2,
        text: '眼科OCT影像智能分析平台',
        slogan: '眼底疾病，一览无余'
    }
];

export default DataList
