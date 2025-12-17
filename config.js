/**
 * 宿舍WiFi极速计划 - 配置文件
 * 只需修改此文件，即可更新整个网站内容
 * 支持HTML标签，如 <br> <strong> <a href="">
 */

window.SITE_CONFIG = {
    // 基础信息
    title: "宿舍WiFi极速计划",
    brand: "宿舍WiFi极速计划",
    
    // 英雄区域
    hero: {
        title: "告别卡顿，畅享极速网络",
        subtitle: "专为宿舍环境优化的WiFi解决方案，低延迟、高稳定、全覆盖"
    },
    
    // 功能特点
    features: [
        {
            icon: "fa-bolt",
            title: "千兆光纤",
            description: "最高1000M带宽，下载速度飞快，看4K视频不卡顿<br><strong>延迟&lt;10ms</strong>"
        },
        {
            icon: "fa-shield-alt",
            title: "网络安全",
            description: "独立账号密码，WPA3加密，保护隐私安全<br><strong>防蹭网</strong>"
        },
        {
            icon: "fa-wifi",
            title: "全覆盖",
            description: "专业AP部署，无死角覆盖，信号穿墙能力强<br><strong>99.9%在线率</strong>"
        },
        {
            icon: "fa-plug",
            title: "即插即用",
            description: "无需复杂设置，网线插上就能用<br><strong>支持多设备</strong>"
        },
        {
            icon: "fa-headset",
            title: "7×24小时支持",
            description: "网络故障快速响应，2小时内解决<br><strong>专业团队</strong>"
        },
        {
            icon: "fa-tag",
            title: "学生优惠",
            description: "凭学生证享折扣，支持按学期付费<br><strong>性价比高</strong>"
        }
    ],
    
    // 套餐价格
    plans: [
        {
            name: "基础版",
            price: "￥29/月",
            speed: "100M带宽",
            features: [
                "支持3台设备",
                "基础游戏加速",
                "每日流量100GB",
                "标准客服响应"
            ],
            recommended: false,
            cta: "立即开通"
        },
        {
            name: "极速版",
            price: "￥49/月",
            speed: "300M带宽",
            features: [
                "支持5台设备",
                "专业游戏加速",
                "无限流量",
                "7×24小时客服",
                "赠送网线"
            ],
            recommended: true,
            cta: "立即开通"
        },
        {
            name: "尊享版",
            price: "￥79/月",
            speed: "1000M带宽",
            features: [
                "支持10台设备",
                "电竞级加速",
                "无限流量",
                "专属客服",
                "赠送路由器"
            ],
            recommended: false,
            cta: "立即开通"
        }
    ],
    
    // 开通流程
    process: [
        {
            step: 1,
            title: "在线申请",
            desc: "填写宿舍号和联系方式"
        },
        {
            step: 2,
            title: "等待安装",
            desc: "工程师24小时内上门"
        },
        {
            step: 3,
            title: "开通使用",
            desc: "调试完成，即刻上网"
        }
    ],
    
    // 常见问题
    faq: [
        {
            q: "网速真的能保证吗？",
            a: "我们承诺带宽达标，如未达标可全额退款。高峰时段会自动优化，确保游戏体验。"
        },
        {
            q: "一个账号能几台设备用？",
            a: "根据套餐不同支持3-10台设备，超出可额外购买设备授权。"
        },
        {
            q: "放假期间可以暂停服务吗？",
            a: "可以！寒暑假可申请暂停，按月计费用户不收费，按学期用户自动延期。"
        },
        {
            q: "网络故障怎么处理？",
            a: "拨打客服电话400-123-4567，2小时内响应，远程解决不了立即上门。"
        },
        {
            q: "支持游戏加速吗？",
            a: "极速版和尊享版内置游戏加速器，支持主流外服游戏，延迟降低50%。"
        }
    ],
    
    // 联系信息
    contact: {
        phone: "400-123-4567",
        email: "support@wifi-dorm.com",
        time: "9:00-22:00",
        location: "学生服务中心3楼"
    },
    
    // 页脚
    footer: "&copy; 2025 宿舍WiFi极速计划. All rights reserved."
};