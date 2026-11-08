import mongoose from 'mongoose';
const suspectSchema = new mongoose.Schema({ id:String,name:String,age:Number,occupation:String,background:String,relationship:String,motive:String,alibi:String,behavior:String,initials:String,color:String });
const evidenceSchema = new mongoose.Schema({ id:String,type:String,title:String,time:String,location:String,content:String,detail:String,linkedSuspects:[String] });
const caseSchema = new mongoose.Schema({ title:String,category:String,difficulty:String,setting:String,briefing:String,incident:String,suspects:[suspectSchema],evidence:[evidenceSchema],timeline:[{time:String,event:String}],solution:{culpritId:String,motive:String,method:String,opportunity:String,explanation:String,misleadingEvidence:String,innocentReasons:[String],clueIds:[String]} },{timestamps:true});
const sessionSchema = new mongoose.Schema({ caseId:{type:mongoose.Schema.Types.ObjectId,ref:'Case',required:true},token:{type:String,unique:true},notes:{type:String,default:''},bookmarks:[String],viewed:[String],accusation:String,resolvedAt:Date },{timestamps:true});
export const Case=mongoose.models.Case||mongoose.model('Case',caseSchema);
export const GameSession=mongoose.models.GameSession||mongoose.model('GameSession',sessionSchema);
