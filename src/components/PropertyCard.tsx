'use client';
import Link from 'next/link';
import { MapPin, BedDouble, Maximize2, Phone, Calendar, Eye, ArrowRight } from 'lucide-react';
import { Property, formatPrice } from '@/lib/data';

export default function PropertyCard({ property, view = 'grid' }: { property: Property; view?: 'grid'|'list' }) {
  if (view === 'list') {
    return (
      <article className="property-card flex flex-col sm:flex-row overflow-hidden">
        <div className="sm:w-72 h-56 sm:h-auto relative flex-shrink-0 overflow-hidden bg-gray-100">
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"/>
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {property.featured && <span className="badge badge-gold">⭐ Featured</span>}
            {property.verified && <span className="badge badge-green">✓ Verified</span>}
            {property.sold && <span className="badge badge-red">Sold</span>}
          </div>
          <div className="absolute bottom-3 right-3 badge badge-navy">{property.type}</div>
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <Link href={`/properties/${property.id}`}>
                <h3 className="font-bold font-serif text-lg leading-snug hover:text-amber-700 transition-colors cursor-pointer" style={{color:'#1A2E4A'}}>{property.title}</h3>
              </Link>
              <div className="text-right flex-shrink-0 ml-2">
                <div className="text-2xl font-bold font-serif" style={{color:'#C9940A'}}>{property.priceLabel}</div>
                {property.type==='Flat'&&<div className="text-xs text-gray-400">₹{Math.round(property.price/property.area).toLocaleString('en-IN')}/sqft</div>}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
              <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0"/>
              <span className="truncate">{property.location}</span>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-gray-600 mb-4">
              {property.bhk>0&&<span className="flex items-center gap-1.5 font-medium"><BedDouble className="w-4 h-4 text-gray-400"/>{property.bhk} BHK</span>}
              <span className="flex items-center gap-1.5 font-medium"><Maximize2 className="w-4 h-4 text-gray-400"/>{property.area} {property.type==='Plot'?'Sq Yd':'Sq Ft'}</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"/>
                <span className="font-medium text-emerald-700">{property.possession}</span>
              </span>
              <span className="text-gray-400">{property.furnished}</span>
            </div>
            <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{property.description}</p>
          </div>
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Calendar className="w-3.5 h-3.5"/>
              {new Date(property.postedDate).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}
            </div>
            <div className="flex gap-2">
              <Link href={`/properties/${property.id}`} className="btn btn-navy btn-sm">
                <Eye className="w-3.5 h-3.5"/> View
              </Link>
              <a href={`tel:${property.agentPhone}`} className="btn btn-gold btn-sm">
                <Phone className="w-3.5 h-3.5"/> Contact
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid view
  return (
    <article className="property-card group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100 flex-shrink-0">
        <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" loading="lazy"/>
        {/* Overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{background:'linear-gradient(to top,rgba(10,22,42,0.7) 0%,transparent 50%)'}}/>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {property.featured && <span className="badge badge-gold">⭐ Featured</span>}
          {property.verified && <span className="badge badge-green">✓ Verified</span>}
        </div>
        {property.sold && (
          <div className="absolute inset-0 flex items-center justify-center" style={{background:'rgba(0,0,0,0.55)'}}>
            <span className="font-bold text-white text-lg bg-red-500 px-5 py-1.5 rounded-full tracking-wide">SOLD</span>
          </div>
        )}
        {/* Type badge */}
        <div className="absolute bottom-3 right-3 badge badge-navy">{property.type}</div>
        {/* CTA on hover */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Link href={`/properties/${property.id}`} className="btn btn-gold btn-sm">
            View Details <ArrowRight className="w-3.5 h-3.5"/>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Price */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="text-2xl font-bold font-serif" style={{color:'#C9940A'}}>{property.priceLabel}</div>
          {property.type==='Flat'&&<div className="text-xs text-gray-400 text-right mt-1.5">₹{Math.round(property.price/property.area).toLocaleString('en-IN')}/sqft</div>}
        </div>

        {/* Title */}
        <Link href={`/properties/${property.id}`}>
          <h3 className="font-bold font-serif text-base leading-snug mb-2 hover:text-amber-700 transition-colors cursor-pointer line-clamp-2" style={{color:'#1A2E4A'}}>
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
          <MapPin className="w-3 h-3 text-amber-500 flex-shrink-0"/>
          <span className="truncate">{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex gap-4 text-xs text-gray-500 font-medium mb-4 flex-wrap">
          {property.bhk>0&&<span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5 text-gray-300"/>{property.bhk} BHK</span>}
          <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-gray-300"/>{property.area} {property.type==='Plot'?'Sq Yd':'Sqft'}</span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"/>
            <span className="text-xs font-semibold text-emerald-700">{property.possession}</span>
          </div>
          <a href={`tel:${property.agentPhone}`} className="text-xs font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity" style={{color:'#C9940A'}}>
            <Phone className="w-3 h-3"/> Contact Agent
          </a>
        </div>
      </div>
    </article>
  );
}
