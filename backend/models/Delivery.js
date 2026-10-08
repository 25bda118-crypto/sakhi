import mongoose from "mongoose";

export const COLLECTION_POINT = "Hubballi Centeral Collection Point";
//Delivery lifecycle
export const FLOW = ["PENDING", "READY_FOR_PICKUP", "PICKED_UP", "AT_COLLECTION", "MID_MILE", "AT_DESTINATION", "OUT_FOR_DELIVERY", "DELIVERED"];

const id = (ref) => ({ type: mongoose.Schema.Types.ObjectId, ref});

const schema = new mongoose.Schema({
    OrderId: { ...id("Order"), required: true, unique: true},
    sellerId: { ...id("Seller"), required: true},
    wave: { type: String, required: true},
    waveDate: {type: String, required: true},
    batchId:  {type: String, required: true, index: true},
    deliveryType: {type: String, enum: ["STANDARD", "INSTANT"], default: "STANDARD" },
    estimatedDeliveryMinutes: Number,
    routeCode: { type: String, required: true},
    pickUpArea: String,
    collectionPoint: {type: String , default: COLLECTION_POINT},
    destinationStop: {type: String, required: true},
    pickupPartnerId: id("User"),
    pickupPartner: String,
    lastMileParnterId: id("user"),
    lastMilePartner: String,
    packagePhotoUrl: String,
    packagePhotoTakenAt: Date,
    packagePhotoTakenBy: id("User"),
    status: { type: String, enum: [...FLOW, "CANCELLED"], default:"PENDING" }
    }, { timestamps: true});

export default mongoose.model("Delivery", schema);