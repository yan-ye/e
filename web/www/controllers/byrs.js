
exports.byrs = function (req, res) {
    let data = { title:'博雅瑞斯'};
    data.article = {
        title:'博雅瑞斯',
        article: {
            type:'text',
            title:'公司简介',
            imgs:['article_img_1.jpg'],
            msg:'博雅瑞斯于1995年5月由董事长刘建英创立，是集中成药、化学制药、生物制药的科研生产营销、药品连锁经营、中药材标准栽培于一体的大型现代化民营制药企业。在突出药品主业同时进军健康产业、旅游业、房地产业，实行多元化发展。在立足全国的同时面向世界，开发国际市场。 \n' +
                    '\n' +
                    '   至2016年底，集团下辖127个子公司，有员工10万余人。拥有24种剂型，医药、保健品等品种2千余个。通过二次开发培育了肺宁、消糜栓、六味地黄、颈腰康、益气养血等十几个大品种；采用新型制剂技术开发斯达舒微丸、分散片，确保了博雅瑞斯在国内胃药市场的地位。博雅瑞斯拥有集科技管理、创新药物研究、新技术成果转化为一体国内的科研体系，拥有中技术专家300余人，取得授权专利700余个，荣获国家级科技进步奖7个。有国家认定企业技术中心、中药质量控制技术国家工程实验室、博士后科研工作站、中药标准化关键工程技术重点实验室。集团科技创新中心旗下拥有北京博雅瑞斯新药物研究院、博雅瑞斯生物医药（杭州）研究院、北京药膳研究院等6个研究院所。集团每年的科研经费投入10亿元左右。即将投产上市国家一类生物药新药注射用重组尿酸氧化酶用于肿瘤溶解综合症的治疗，是国际上继赛诺菲后的第二家生产该产品的公司。 \n' +
                    '\n' +
                    '  启动基因重组系列降糖药物国际合作开发平台，与印度联合开发门冬胰岛素、地特胰岛素等系列降糖基因工程药物，实施大型药食真菌产业化技术开发。 \n' +
                    '\n' +
                    '  博雅瑞斯集团在2016年7月24中国医药工业信息中心主办并承办的第33届全国医药工业信息年会暨2015年度中国医药工业百强榜单发布中，博雅瑞斯集团在扬子江药业、广州医药之后位列第三名；在2016年8月25日由中华全国工商业联合会主办，国家工业和信息化部、国家工商总局支持发布的《2016中国民营企业500强榜单》中排名53位、《2016中国民营企业制造业500强榜单》中排名29位；在中国企业联合会、企业家协会《2015中国企业500强榜单》中列252位。 \n' +
                    '\n' +
                    '  博雅瑞斯集团先后荣获 “全国五一劳动奖状”、“人参开发国家科技进步二等奖”、“国家技术创新示范企业”、“国家商标战略实施示范企业”、“全国质量管理先进单位”、“吉林省先进民营科技企业”、“吉林省2013-2014年度守合同重信用AAA级企业”等百余项荣誉。企业致力于慈善事业和社会公益事业，积极参与抗震、抗洪等灾害救助、捐资助学等公益活动，用于各类慈善捐赠及光彩事业价值超过10亿元，集团董事长刘建英先生荣获全国“优秀社会主义事业建设者”、“全国劳动模范”、“中华慈善奖”、“中国光彩事业二十年突出贡献奖”、“2015—2016年度全国优秀企业家”、“吉林省劳动模范”、“长春市首届有特殊贡献民营企业家”等荣誉。同时兼任中国光彩事业促进会副会长、全国工商联执委、中国医药业商会第二届、第三届会长、吉林省政府第四届决策咨询委员、吉林省工商联副主席、吉林省医药行业协会会长等职务。 \n' +
                    '\n' +
                    '  建百年博雅瑞斯，创民族品牌，博雅瑞斯要在10年内力争实现销售收入千亿元目标，到2030年达到万亿元目标，成为世界百强制药企业。',
            origin:'博雅瑞斯',
            create_date:'2015-05-23 16:00:34',
            author:'博雅瑞斯',
        },
    };
    res.render('byrs',data);
};